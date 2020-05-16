//
//  LoginUseCase.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/15.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import Foundation

class LoginUseCase {
    static func requestOAuth(with manager: LogInManageable,
                             completion: @escaping (String) -> Void) {
        manager.requestOAuth(with: LogInRouter.auth(clientID: AuthKeys.clientID).url(),
                             scheme: AuthKeys.scheme,
                             payloadKey: AuthKeys.payloadKey) {
            if case let .success(token) = $0 { completion(token) }
        }
    }
}
