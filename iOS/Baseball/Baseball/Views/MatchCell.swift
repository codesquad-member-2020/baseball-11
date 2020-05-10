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
    
    @IBInspectable var cornerRadius: CGFloat = 0 {
        didSet { configureView() }
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
}

extension MatchCell: ReusableView { }
