//
//  ReusableView.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/10.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import Foundation

protocol ReusableView {
    static var reuseIdentifier: String { get }
}

extension ReusableView {
    static var reuseIdentifier: String {
        return String(describing: self)
    }
}
