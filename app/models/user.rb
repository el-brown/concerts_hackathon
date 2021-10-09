# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :artist_venues
  has_many :venues, through: :artist_venues

  def self.safe_all_data
    select('id, name, genre')
    .from('users')
    .order('id asc')
  end

  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
end
