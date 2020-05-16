//
//  APIRouter.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/04/22.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import Foundation

enum APIRouter: APIBuilder {
    case matches
    
    var path: String {
        switch self {
        case .matches: return Endpoints.matches
        }
    }
}

enum LogInRouter: APIBuilder {
    case auth(clientID: String)
    
    var path: String {
        return Endpoints.authURL
    }
    
    var query: String? {
        switch self {
        case let .auth(clientID: id): return "client_id=\(id)"
        }
    }
}
