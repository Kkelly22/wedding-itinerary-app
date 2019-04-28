require 'jwt'

class Auth
  ALGORITHM = 'HS256'

  def self.encrypt(payload)
    JWT.encode(payload, secret_key, ALGORITHM)
  end

  def self.decode(token)
    JWT.decode(token, secret_key, true, { algorithm: ALGORITHM }).first
  end

  def self.secret_key
    'eeb1df7c1dc4f2ff01389c570a07a21010ff85591a88dcc69d95bdbe5e42e3281ed92af567a7411ad650f0bb8ead8b7cff8d1ca306ef8865fbb8f608f5d01e4115a761d229c836aa4112ff530f17f79b5934de67ca944123109625df7bc65af5ae7a595596c052bc72716d5cd50ac3972c44609b22534436d2a82836c828355e03b0e8bc98ceab35a7de55328d5c64d9571d235a4b21c5bc10b741f040fb0d254f7e1ac007400fefe02e60fb9a1403288454065428a78f2333202f32541a950ecb87bdec2fae302e152c6263b5450e017b6ab92ee4b09527a12223f686413d8e991b015d4cd95245ebb326dd4bb8fc818c01f530ab92cca23e5b74f1abc08639'
  end
end