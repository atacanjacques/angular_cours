import { Component, OnInit } from '@angular/core';
import { Launch } from 'Models/Launch';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  tabOne = "Tabe One";
  tabTwo = "Tabe Two";
  tabOneContent = "Tabe One Content";
  
  user = {
    name: 'toto',
    age: 2,
    email: 'toto@tata.titi'
  };

  launches: Launch[] = [
    {
      flight_number: 38,
      launch_year: '2017',
      launch_date_unix: 1490912820,
      launch_date_utc: new Date('2017-03-30T22:27:00Z'),
      launch_date_local: new Date('2017-03-30T18:27:00-04:00'),
      rocket: {
        rocket_id: 'falcon9',
        rocket_name: 'Falcon 9',
        rocket_type: 'FT',
        first_stage: {
          cores: [
            {
              core_serial: 'B1021',
              flight: 2,
              block: 2,
              reused: true,
              land_success: true,
              landing_type: 'ASDS',
              landing_vehicle: 'OCISLY'
            }
          ]
        },
        second_stage: {
          payloads: [
            {
              payload_id: 'SES-10',
              reused: false,
              customers: [
                'SES'
              ],
              payload_type: 'Satellite',
              payload_mass_kg: 5300,
              payload_mass_lbs: 11700,
              orbit: 'GTO'
            }
          ]
        }
      },
      reuse: {
        core: true,
        side_core1: false,
        side_core2: false,
        fairings: false,
        capsule: false
      },
      telemetry: {
        flight_club: 'https://www.flightclub.io/results/?code=SS10'
      },
      launch_site: {
        site_id: 'ksc_lc_39a',
        site_name: 'KSC LC 39A',
        site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
      },
      launch_success: true,
      links: {
        mission_patch: 'https://images2.imgbox.com/4d/cd/pRO9j7ws_o.png',
        mission_patch_small: 'https://images2.imgbox.com/be/be/qSjjoOQa_o.png',
        reddit_campaign: 'https://www.reddit.com/r/spacex/comments/5sjrzj/ses10_launch_campaign_thread/',
        reddit_launch: 'https://www.reddit.com/r/spacex/comments/62aqi7/rspacex_ses10_official_launch_discussion_updates/',
        reddit_recovery: 'https://www.reddit.com/r/spacex/comments/634gmr/b1021ses10_recovery_thread/',
        reddit_media: 'https://www.reddit.com/r/spacex/comments/62aqad/rspacex_ses10_media_thread_videos_images_gifs/',
        presskit: 'http://www.spacex.com/sites/spacex/files/finalses10presskit.pdf',
        article_link: 'https://en.wikipedia.org/wiki/SES-10',
        video_link: 'https://www.youtube.com/watch?v=xsZSXav4wI8'
      },
      // tslint:disable-next-line:max-line-length
      details: 'First payload to fly on a reused first stage, B1021, previously launched with CRS-8, which also landed a second time. In what is also a first, the payload fairing remained intact after a successful splashdown achieved with thrusters and a steerable parachute.'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
