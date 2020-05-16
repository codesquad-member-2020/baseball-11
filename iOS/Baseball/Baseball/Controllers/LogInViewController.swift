//
//  LogInViewController.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/14.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

class LogInViewController: UIViewController {
    
    private let viewModel = LogInViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        configureViewModel()
    }
    
    @IBAction func logIn(_ sender: Any) {
        LoginUseCase.requestOAuth(with: LogInManager()) { [weak self] in
            Authentication.shared.token = $0
            self?.viewModel.update(authentication: Authentication.shared)
        }
    }
    
    private func configureViewModel() {
        
    }
}
