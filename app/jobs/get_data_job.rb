class GetDataJob < ApplicationJob
  queue_as :default

  def perform(*args)
    GetData.exec
  end
end
