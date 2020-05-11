//
//  MatchCell.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/10.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

@IBDesignable
class MatchCell: UICollectionViewCell {
    
    @IBOutlet weak var awayLabel: UILabel!
    @IBOutlet weak var homeLabel: UILabel!
    
    @IBInspectable var cornerRadius: CGFloat = 0 {
        didSet { configureView() }
    }
    
    var match: Match? = nil {
        didSet { configureCell() }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configureView()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configureView()
    }
    
    private func configureView() {
        contentView.layer.cornerRadius = cornerRadius
        layer.shadowColor = UIColor.black.cgColor
        layer.shadowOffset = CGSize(width: 0, height: 0)
        layer.shadowRadius = 6
        layer.shadowOpacity = 0.2
        layer.masksToBounds = false
    }
    
    private func configureCell() {
        awayLabel.text = match?.away.name
        homeLabel.text = match?.home.name
    }
}

extension MatchCell: ReusableView { }
