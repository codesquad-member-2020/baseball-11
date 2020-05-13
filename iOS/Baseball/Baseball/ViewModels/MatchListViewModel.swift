//
//  MatchListViewModel.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/10.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

class MatchListViewModel: NSObject {
    typealias Key = [Match]?

    private var matches: Key = nil {
        didSet { NotificationCenter.default.post(name: .matchesDidUpdate, object: self) }
    }
    
    init(with matches: Key = nil) {
        self.matches = matches
    }

    func update(matches: Key) {
        self.matches = matches
    }
}

extension MatchListViewModel: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return matches?.count ?? 0
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: MatchCell.reuseIdentifier, for: indexPath) as? MatchCell else { return UICollectionViewCell() }
        cell.match = matches?[indexPath.item]
        return cell
    }
}

extension Notification.Name {
    static let matchesDidUpdate = Notification.Name("matchesDidUpdate")
}
