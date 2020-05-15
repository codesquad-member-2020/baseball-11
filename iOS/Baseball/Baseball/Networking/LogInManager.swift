//
//  LogInManager.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/15.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import Foundation
import AuthenticationServices

enum LogInError: Error {
    case tokenNotFound
}

protocol LogInManageable { }

extension LogInManageable {
    func requestOAuth(with url: URL?,
                      scheme: String,
                      completion: @escaping (Result<String, Error>) -> Void) {
        guard let url = url else { return }
        
        ASWebAuthenticationSession(url: url, callbackURLScheme: scheme) { callbackURL, error in
            if let error = error {
                completion(.failure(error))
                return
            }
            guard let url = callbackURL else { return }
            if let token = URLComponents(string: url.absoluteString)?
                .queryItems?.filter({ $0.name == "code" }).first?.value {
                completion(.success(token))
            } else {
                completion(.failure(LogInError.tokenNotFound))
            }
        }.start()
    }
}

struct LogInManager: LogInManageable { }
