//
//  MatchesUseCase.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/11.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import Foundation

struct MatchesUseCase {
    static func performFetching(with manager: NetworkManageable,
                                completion: @escaping ([Match]) -> Void) {
        manager.request(MatchesResponse.self, with: APIRouter.matches.urlRequest()) { result in
            if case let .success(response) = result { completion(response) }
        }
    }
}
