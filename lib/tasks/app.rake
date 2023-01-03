namespace :app do
  desc "Create stickies"
  task create_stickies: :environment do
    if Sticky.count == 0
      puts "Creating stickies ..."

      Sticky.create(message: "This is our first sticky", color: "yellow")
      Sticky.create(message: "Here's another sticky, just a bit longer than the first.", color: "yellow")
      Sticky.create(message: "Here's out final sticky. Let's make it longer than the second, just for the giggles.", color: "yellow")

      puts "Stickies created."
    else
      puts "You already have stickies."
    end
  end
end
