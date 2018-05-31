class PutHelloJob < ApplicationJob
  queue_as :default

  def perform(*args, message)
    # Do something later
    puts message
  end
end
