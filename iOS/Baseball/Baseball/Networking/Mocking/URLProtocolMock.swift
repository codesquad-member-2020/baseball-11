//
//  URLProtocolMock.swift
//  TodoListTests
//
//  Created by Chaewan Park on 2020/04/07.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import Foundation

class URLProtocolMock: URLProtocol {
    static var testURLs = [
        APIRouter.matches.url()!: Data.readJSON(for: "MatchesResponse")
    ]
    
    override class func canInit(with request: URLRequest) -> Bool {
        return true
    }
    
    override class func canonicalRequest(for request: URLRequest) -> URLRequest {
        return request
    }
    
    override func startLoading() {
        if let url = request.url, let data = URLProtocolMock.testURLs[url] {
            let response = HTTPURLResponse(url: url,
                                           statusCode: 200,
                                           httpVersion: nil,
                                           headerFields: nil)!
            client?.urlProtocol(self, didReceive: response, cacheStoragePolicy: .notAllowed)
            client?.urlProtocol(self, didLoad: data)
        }
        self.client?.urlProtocolDidFinishLoading(self)
    }
    
    override func stopLoading() { }
}

private extension Data {
    static func readJSON(for resource: String) -> Data {
        let url = Bundle.main.url(forResource: resource, withExtension: "json")!
        let jsonData = try? Data(contentsOf: url)
        return jsonData!
    }
}
