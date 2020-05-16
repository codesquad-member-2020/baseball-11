//
//  LoginView.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/16.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

class LoginView: UIStackView {
    
    @IBOutlet weak var loginView: UIView!
    @IBOutlet weak var gameStartView: UIView!
    
    func updateView(with auth: Authentication) {
        if auth.isUserLoggedIn {
            loginView.isHidden = true
            gameStartView.isHidden = false
        } else {
            loginView.isHidden = false
            gameStartView.isHidden = true
        }
    }
}
