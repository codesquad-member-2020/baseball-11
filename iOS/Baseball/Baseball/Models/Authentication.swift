//
//  Authentication.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/16.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import Foundation

class Authentication {
    
    static let shared = Authentication()
    
    var token: String?
    
    var isUserLoggedIn: Bool {
        return token != nil
    }
}
