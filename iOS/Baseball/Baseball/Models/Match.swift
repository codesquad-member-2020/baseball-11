//
//  Match.swift
//  Baseball
//
//  Created by Chaewan Park on 2020/05/10.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import Foundation

typealias MatchesResponse = [Match]

struct Match: Codable {
    let matchID: Int
    let away, home: Team

    enum CodingKeys: String, CodingKey {
        case matchID = "gameNumber"
        case away, home
    }
}

struct Team: Codable {
    let name: String
    
    enum CodingKeys: String, CodingKey {
        case name = "teamName"
    }
}
