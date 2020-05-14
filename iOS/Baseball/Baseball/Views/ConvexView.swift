//
//  ConvexView.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/14.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

@IBDesignable
class ConvexView: UIView {
    
    @IBInspectable var cornerRadius: CGFloat = 0 {
        didSet { configureView() }
    }
    
    private func configureView() {
        layer.cornerRadius = cornerRadius
        layer.shadowColor = UIColor.black.cgColor
        layer.shadowOffset = CGSize(width: 0, height: 0)
        layer.shadowRadius = 6
        layer.shadowOpacity = 0.2
        layer.masksToBounds = false
    }
}
