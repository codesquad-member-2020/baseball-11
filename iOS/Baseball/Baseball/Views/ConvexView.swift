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
    
    @IBInspectable var layerColor: UIColor = .clear {
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
        let convexLayer = ConvexLayer()
        convexLayer.backgroundColor = layerColor.cgColor
        convexLayer.frame = CGRect(origin: CGPoint.zero, size: frame.size)
        layer.insertSublayer(convexLayer, at: 0)
    }
}
