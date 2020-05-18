//
//  MatchListViewController.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/10.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

class MatchListViewController: UIViewController {

    @IBOutlet weak var collectionView: UICollectionView!
    
    private let viewModel = MatchListViewModel()
    private lazy var layoutDelegate = MatchListLayout()
    
    private var networkManager: NetworkManageable?
    private var observer: NotificationToken?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        collectionView.dataSource = viewModel
        collectionView.delegate = layoutDelegate

        configureObserver()
        configureSession()
        configureUseCase()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        guard let indexPath = collectionView.indexPathsForSelectedItems?.first,
            let cell = collectionView.cellForItem(at: indexPath) as? MatchCell else { return }
        cell.state = .waiting
    }
    
    override func viewWillTransition(to size: CGSize, with coordinator: UIViewControllerTransitionCoordinator) {
        collectionView.reloadData()
    }
    
    @IBAction func exit(_ sender: Any) {
        navigationController?.popViewController(animated: true)
    }
    
    private func configureObserver() {
        observer = NotificationCenter.default.addObserver(forName: .matchesDidUpdate) { [weak self] _ in
            self?.collectionView.reloadData()
        }
    }

    private func configureSession() {
        let config = URLSessionConfiguration.ephemeral
        config.protocolClasses = [URLProtocolMock.self]
        networkManager = NetworkManager(session: URLSession(configuration: config))
    }

    private func configureUseCase() {
        guard let manager = networkManager else { return }
        MatchesUseCase.performFetching(with: manager) { [weak self] in
            self?.viewModel.update(matches: $0)
        }
    }
}
