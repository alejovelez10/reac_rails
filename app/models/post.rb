# == Schema Information
#
# Table name: posts
#
#  id               :integer          not null, primary key
#  html_content     :text
#  markdown_content :text             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  user_id          :integer
#
# Indexes
#
#  index_posts_on_user_id  (user_id)
#

class Post < ApplicationRecord
  belongs_to :user
  validates :markdown_content, presence: true, length: {minimum: 2}
end
