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
    
    var localizedDescription: String {
        switch self {
        case .tokenNotFound: return "JWT Token Not Found"
        }
    }
}

protocol LogInManageable {
    var presentationContextProvider: ASWebAuthenticationPresentationContextProviding { get }
}

extension LogInManageable {
    func requestOAuth(with url: URL?,
                      scheme: String,
                      payloadKey: String,
                      completion: @escaping (Result<String, Error>) -> Void) {
        guard let url = url else { return }
        
        let session = ASWebAuthenticationSession(url: url, callbackURLScheme: scheme) { callbackURL, error in
            if let error = error {
                completion(.failure(error))
                return
            }
            guard let url = callbackURL else { return }
            if let token = URLComponents(string: url.absoluteString)?
                .queryItems?.filter({ $0.name == payloadKey }).first?.value {
                completion(.success(token))
            } else {
                completion(.failure(LogInError.tokenNotFound))
            }
        }
        session.presentationContextProvider = presentationContextProvider
        session.start()
    }
}

class LogInManager: LogInManageable {
    var presentationContextProvider: ASWebAuthenticationPresentationContextProviding
    
    init() {
        presentationContextProvider = PresentationContextProvider()
    }
}

class PresentationContextProvider: NSObject, ASWebAuthenticationPresentationContextProviding {
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return ASPresentationAnchor()
    }
}
