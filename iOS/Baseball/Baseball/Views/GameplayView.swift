//
//  GameplayView.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/06.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

@IBDesignable
class GameplayView: UIView {
    
    @IBInspectable var patternImage: UIImage? = nil {
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
        guard let pattern = patternImage else { return }
        backgroundColor = UIColor(patternImage: pattern)
    }
}
