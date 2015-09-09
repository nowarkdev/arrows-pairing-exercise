module Simulado
  SIMULADO = Net::HTTP.new('localhost', 7001)
  JSON_HEADERS = {'Content-Type' => 'application/json', 'Accept' => 'application/json'}

  def mock(response)
    SIMULADO.post('/syncMock', response.to_json, JSON_HEADERS)
  end

  def last_request(method, path)
    headers = JSON_HEADERS.merge('method' => method, 'path' => path)
    response = SIMULADO.get('/lastRequest', headers).body
    JSON.parse(response)
  end

  def clear_last_requests
    SIMULADO.delete('/clearLastRequests', JSON_HEADERS)
  end
end

World(Simulado)