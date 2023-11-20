sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'projannotatio/test/integration/FirstJourney',
		'projannotatio/test/integration/pages/EscalationsList',
		'projannotatio/test/integration/pages/EscalationsObjectPage'
    ],
    function(JourneyRunner, opaJourney, EscalationsList, EscalationsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('projannotatio') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEscalationsList: EscalationsList,
					onTheEscalationsObjectPage: EscalationsObjectPage
                }
            },
            opaJourney.run
        );
    }
);