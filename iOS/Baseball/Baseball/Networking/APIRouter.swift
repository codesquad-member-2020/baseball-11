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
