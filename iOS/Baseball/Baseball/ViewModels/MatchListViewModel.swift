//
//  MatchListViewModel.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/10.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

protocol ViewModelBinding {
    associatedtype Key
    func updateNotify(handler: @escaping (Key) -> Void)
}

class MatchListViewModel: NSObject, ViewModelBinding {
    typealias Key = [Match]?

    private var matches: Key = nil {
        didSet { changeHandler(matches) }
    }

    private var changeHandler: (Key) -> Void

    init(with matches: Key = nil, handler: @escaping (Key) -> Void = { _ in }) {
        self.changeHandler = handler
        self.matches = matches
        changeHandler(matches)
    }

    func update(matches: Key) {
        self.matches = matches
    }

    func updateNotify(handler: @escaping (Key) -> Void) {
        self.changeHandler = handler
    }
}

extension MatchListViewModel: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 5
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: MatchCell.reuseIdentifier, for: indexPath)
        return cell
    }
}
