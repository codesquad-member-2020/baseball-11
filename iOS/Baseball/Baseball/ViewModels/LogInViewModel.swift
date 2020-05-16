//
//  LogInViewModel.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/16.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import Foundation

protocol ViewModelBinding {
    associatedtype Key
    func updateNotify(handler: @escaping (Key) -> Void)
}

class LogInViewModel: ViewModelBinding {
    typealias Key = Authentication?
    
    private var authentication: Key = nil {
        didSet { changeHandler(authentication) }
    }
    
    private var changeHandler: (Key) -> Void
    
    init(with authentication: Key = nil, handler: @escaping (Key) -> Void = { _ in }) {
        self.changeHandler = handler
        self.authentication = authentication
        changeHandler(authentication)
    }
    
    func update(authentication: Key) {
        self.authentication = authentication
    }
    
    func updateNotify(handler: @escaping (Key) -> Void) {
        self.changeHandler = handler
    }
}
