class Kluuu < Klu
  attr_accessible :klu_images_attributes
  
  CHARGE_TYPES = %w{free minute fix}
  
  has_many :bookmarks, :dependent => :destroy, :foreign_key => :klu_id
  has_many :klu_images, :foreign_key => :klu_id, :dependent => :destroy
  # because of STI in Klu - rateable_type will always be 'Klu'
  has_many :ratings, :as => :rateable, :dependent => :destroy 
  
  # see base-class for base-validations
  validates_presence_of :charge_cents, :description, :category_id #, :currency  #, :currency
  validate :set_currency, :if => Proc.new {|k| k.charge_type != 'free'}
  
  accepts_nested_attributes_for :klu_images, :allow_destroy => true
  
  monetize :charge_cents
  
  after_create :generate_notification  # defined in base-class
  
  def set_currency
    unless self.user.balance_account.nil?
      self.currency = self.user.balance_account.currency
    else
      self.errors.add(:currency, I18n.t('.no_account', :default => 'You got to create an balance account before You can charge for your KluuUs'))
    end
  end
    
end
