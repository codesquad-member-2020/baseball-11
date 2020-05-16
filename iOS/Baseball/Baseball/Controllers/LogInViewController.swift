//
//  LogInViewController.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/14.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

class LogInViewController: UIViewController {
    
    @IBOutlet weak var logInView: LoginView!
    
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
        viewModel.updateNotify { [weak self] in
            guard let authInfo = $0 else { return }
            self?.logInView.updateView(with: authInfo)
        }
    }
}
