//
//  LogInViewController.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/14.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

class LogInViewController: UIViewController {
        
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    @IBAction func logIn(_ sender: Any) {
        LoginUseCase.requestOAuth(with: LogInManager()) {
            Authentication.shared.token = $0
        }
    }
}
