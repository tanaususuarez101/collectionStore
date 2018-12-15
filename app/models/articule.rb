class Articule < ActiveRecord::Base
  belongs_to :user
  validates :title, presence: true, length: {minimum: 5},  uniqueness: true
  validates :body , presence: true, length: {minimum: 20}
  validates :thumdnail, presence: true
  validates :price, presence: true

end
