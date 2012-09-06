class Category < ActiveRecord::Base
  attr_accessible :lft, :name, :parent_id, :rgt
  translates :name, :fallbacks_for_empty_translations => true
  
  validates :name, :presence => true
  
  def to_s
    name
  end
end
