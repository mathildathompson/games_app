User.destroy_all
Portfolio.destroy_all
Education.destroy_all
Career.destroy_all

u1 = User.create(:first_name => 'Oliver', :last_name => 'Dutton', :github => 'https://github.com/ollyd', 
    :linkedin => 'http://www.linkedin.com/profile/view?id=74952025', :email => 'ollydutton@gmail.com', 
    :twitter => 'https://twitter.com/hacks_n_stacks')

p1 = Portfolio.create(:title => 'CoinHome', :link => 'http://coinhome.herokuapp.com/', :image => '')

e1 = Education.create(:institution => 'Bournemouth University', :course => 'BA in Advertising & Marketing Communications', 
    :start_date => '01/09/2000', :end_date => '30/06/2003' )

c1 = Career.create(:job_title => 'Search & Innovations Director', :job_description => 'Blah blah blah bleurgh...',
    :company => 'Maxus', :start_date => '15/01/2011', :end_date => '20/02/2013')

u1.portfolios << p1
u1.educations << e1
u1.careers << c1
# hey Olly