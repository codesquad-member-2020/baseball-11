//
//  MatchCell.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/10.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

enum MatchState {
    case normal
    case waiting
    case matched
}

@IBDesignable
class MatchCell: UICollectionViewCell {
    
    @IBOutlet weak var awayLabel: UILabel!
    @IBOutlet weak var homeLabel: UILabel!
    @IBOutlet weak var dimView: DimView!
    @IBOutlet weak var activityIndicator: UIActivityIndicatorView!
    
    @IBInspectable var layerColor: UIColor = .clear {
        didSet { configureView() }
    }
    
    var match: Match? = nil {
        didSet { configureCell() }
    }
    
    var state: MatchState = .normal {
        didSet { changeCell(to: state) }
    }
    
    var convexLayer: ConvexLayer?
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configureView()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configureView()
    }
    
    private func changeCell(to state: MatchState) {
        switch state {
        case .normal:
            dimView.setNormal()
            activityIndicator.isHidden = true
        case .waiting:
            dimView.setDimmed()
            activityIndicator.isHidden = false
            activityIndicator.startAnimating()
        case .matched:
            activityIndicator.stopAnimating()
        }
    }
    
    private func configureView() {
        convexLayer = ConvexLayer()
        convexLayer!.backgroundColor = layerColor.cgColor
        convexLayer!.frame = CGRect(origin: CGPoint.zero, size: frame.size)
        layer.insertSublayer(convexLayer!, at: 0)
        layer.masksToBounds = false
    }
    
    private func configureCell() {
        awayLabel.text = match?.away.name
        homeLabel.text = match?.home.name
    }
}

extension MatchCell: ReusableView { }
