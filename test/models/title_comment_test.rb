# == Schema Information
#
# Table name: title_comments
#
#  id           :integer          not null, primary key
#  title_id     :integer          not null
#  user_id      :integer          not null
#  comment_text :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class TitleCommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
