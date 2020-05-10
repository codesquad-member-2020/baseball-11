//
//  MatchView.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/07.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

@IBDesignable
class MatchView: UIView {
    
    @IBInspectable var patternImage: UIImage? = nil {
        didSet { configureView() }
    }
    
    @IBInspectable var borderColor: UIColor? {
        didSet { layer.borderColor = borderColor?.cgColor }
    }

    @IBInspectable var borderWidth: CGFloat = 0 {
        didSet { layer.borderWidth = borderWidth }
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
