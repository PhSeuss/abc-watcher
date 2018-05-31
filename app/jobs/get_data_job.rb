class GetDataJob < ApplicationJob
  queue_as :default

  def perform(*args)
    GetData.log
  end
end
