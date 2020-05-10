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
    private let delegate = MatchListDelegate()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        collectionView.dataSource = viewModel
        collectionView.delegate = delegate
    }
}
