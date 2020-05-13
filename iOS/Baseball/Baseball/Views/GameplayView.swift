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
    
    @IBInspectable var groundSize: CGFloat = 0.8
    @IBInspectable var borderColor: UIColor = .white
    @IBInspectable var baseColor: UIColor = .white
    @IBInspectable var baseBorderColor: UIColor = .white
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configureView()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configureView()
    }
    
    override func draw(_ rect: CGRect) {
        let radius = frame.height / 2 * groundSize
        let center = CGPoint(x: frame.width / 2, y: frame.height / 2)
        drawGround(with: center, radius: radius)
        drawBase(with: center.plus(height: radius), radius: 11)
        drawBase(with: center.plus(width: radius), radius: 11)
        drawBase(with: center.minus(height: radius), radius: 11)
        drawBase(with: center.minus(width: radius), radius: 11)
    }
    
    private func configureView() {
        guard let pattern = patternImage else { return }
        backgroundColor = UIColor(patternImage: pattern)
    }
    
    private func drawBase(with center: CGPoint, radius: CGFloat) {
        let path = UIBezierPath()
        path.lineWidth = 6
        baseBorderColor.setStroke()
        baseColor.setFill()
        path.drawDiamond(with: center, radius: radius)
        path.close()
        path.stroke()
        path.fill()
    }
    
    private func drawGround(with center: CGPoint, radius: CGFloat) {
        let path = UIBezierPath()
        path.lineWidth = 4
        borderColor.setStroke()
        path.drawDiamond(with: center, radius: radius)
        path.close()
        path.stroke()
    }
}

extension UIBezierPath {
    func drawDiamond(with center: CGPoint, radius: CGFloat) {
        move(to: center.plus(height: radius))
        addLine(to: center.plus(width: radius))
        addLine(to: center.minus(height: radius))
        addLine(to: center.minus(width: radius))
    }
}

extension CGPoint {
    func plus(width: CGFloat = 0, height: CGFloat = 0) -> CGPoint {
        return CGPoint(x: x + width, y: y + height)
    }
    
    func minus(width: CGFloat = 0, height: CGFloat = 0) -> CGPoint {
        return CGPoint(x: x - width, y: y - height)
    }
}
