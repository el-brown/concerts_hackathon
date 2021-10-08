# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ArtistVenue.destroy_all
Venue.destroy_all
User.destroy_all
Ticket.destroy_all

     user = User.create( name:Faker::Music.band, email:'artist1@email.com', password:'123456', genre:Faker::Music.genre)
     user1 = User.create( name:Faker::Music.band, email:'artist2@email.com', password:'123456', genre:Faker::Music.genre)
     user2 = User.create( name:Faker::Music.band, email:'artist3@email.com', password:'123456', genre:Faker::Music.genre)
     user3 = User.create( name:Faker::Music.band, email:'artist4@email.com', password:'123456', genre:Faker::Music.genre)
     user4 = User.create( name:Faker::Music.band, email:'artist5@email.com', password:'123456', genre:Faker::Music.genre)
     user5 = User.create( name:Faker::Music.band, email:'artist6@email.com', password:'123456', genre:Faker::Music.genre)

# users = [user,user2,user5]
# custusers = [user3,user4, user6]
  artists = [user, user1, user2, user3, user4, user5]

      venue = Venue.create(city:Faker::Address.city, name:Faker::Company.name, street:Faker::Address.street_address, state:Faker::Address.state, ticket_capacity:Faker::Number.number(digits: 2))
      venue1 = Venue.create(city:Faker::Address.city, name:Faker::Company.name, street:Faker::Address.street_address, state:Faker::Address.state, ticket_capacity:Faker::Number.number(digits: 3))
      venue2 = Venue.create(city:Faker::Address.city, name:Faker::Company.name, street:Faker::Address.street_address, state:Faker::Address.state, ticket_capacity:Faker::Number.number(digits: 3))
      venue3 = Venue.create(city:Faker::Address.city, name:Faker::Company.name, street:Faker::Address.street_address, state:Faker::Address.state, ticket_capacity:Faker::Number.number(digits: 3))
      venue4 = Venue.create(city:Faker::Address.city, name:Faker::Company.name, street:Faker::Address.street_address, state:Faker::Address.state, ticket_capacity:Faker::Number.number(digits: 3))
      venue5 = Venue.create(city:Faker::Address.city, name:Faker::Company.name, street:Faker::Address.street_address, state:Faker::Address.state, ticket_capacity:Faker::Number.number(digits: 3))
      venue6 = Venue.create(city:Faker::Address.city, name:Faker::Company.name, street:Faker::Address.street_address, state:Faker::Address.state, ticket_capacity:Faker::Number.number(digits: 3))
  
  venues = [venue, venue1, venue2, venue3, venue4, venue5, venue6]

  concert = [
    "#{user.name} at #{venue.name} ", 
    "#{user1.name} at #{venue1.name} ", 
    "#{user2.name} at #{venue2.name} ", 
    "#{user3.name} at #{venue3.name} ", 
    "#{user4.name} at #{venue4.name} ", 
    "#{user5.name} at #{venue5.name} ", 
    "#{user1.name} at #{venue6.name} " ]

    7.times { | i |
      Ticket.create(concert: concert[i], price:rand(10), time:Faker::Time.forward(days: 30, period: :evening), venue_id:venues[i].id)
    }

  

      ArtistVenue.create(user_id:artists[0].id, venue_id:venues[0].id )
      ArtistVenue.create(user_id:artists[1].id, venue_id:venues[1].id )
      ArtistVenue.create(user_id:artists[2].id, venue_id:venues[2].id )
      ArtistVenue.create(user_id:artists[3].id, venue_id:venues[3].id )
      ArtistVenue.create(user_id:artists[4].id, venue_id:venues[4].id )
      ArtistVenue.create(user_id:artists[5].id, venue_id:venues[5].id )
      ArtistVenue.create(user_id:artists[0].id, venue_id:venues[6].id )
