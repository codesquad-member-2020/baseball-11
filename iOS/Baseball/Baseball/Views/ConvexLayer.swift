//
//  ConvexLayer.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/14.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

class ConvexLayer: CALayer {
    
    override init() {
        super.init()
        configureLayer()
    }
    
    override init(layer: Any) {
        super.init(layer: layer)
        configureLayer()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configureLayer()
    }
    
    private func configureLayer() {
        cornerRadius = 15
        backgroundColor = UIColor.white.cgColor
        shadowColor = UIColor.black.cgColor
        shadowOffset = CGSize(width: 0, height: 0)
        shadowRadius = 6
        shadowOpacity = 0.2
        masksToBounds = false
    }
}
