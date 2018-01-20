import { isNil } from 'lodash/lang'

const NOT_AVAILABLE = 'N/A';

const LOUDNESS_BUCKETS = {
    0: { count: 0, display: '-60' },
    1: { count: 0, display: '-35' },
    2: { count: 0, display: '-20' },
    3: { count: 0, display: '-15' },
    4: { count: 0, display: '-12' },
    5: { count: 0, display: '-9' },
    6: { count: 0, display: '-6' },
    7: { count: 0, display: '-3' },
    8: { count: 0, display: '0'}
};

const DURATION_BUCKETS = {
    0: { count: 0, display: '0' },
    1: { count: 0, display: '1' },
    2: { count: 0, display: '2' },
    3: { count: 0, display: '3' },
    4: { count: 0, display: '4' },
    5: { count: 0, display: '5' },
    6: { count: 0, display: '6' },
    7: { count: 0, display: '7+' }
};

const ZERO_ONE_BUCKETS = {
    0: { count: 0, display: '0.00' },
    1: { count: 0, display: '0.05' },
    2: { count: 0, display: '0.10' },
    3: { count: 0, display: '0.15' },
    4: { count: 0, display: '0.20' },
    5: { count: 0, display: '0.25' },
    6: { count: 0, display: '0.30' },
    7: { count: 0, display: '0.35' },
    8: { count: 0, display: '0.40' },
    9: { count: 0, display: '0.45' },
    10: { count: 0, display: '0.50' },
    11: { count: 0, display: '0.55' },
    12: { count: 0, display: '0.60' },
    13: { count: 0, display: '0.65' },
    14: { count: 0, display: '0.70' },
    15: { count: 0, display: '0.75' },
    16: { count: 0, display: '0.80' },
    17: { count: 0, display: '0.85' },
    18: { count: 0, display: '0.90' },
    19: { count: 0, display: '0.95' },
    20: { count: 0, display: '1.00' }
};

const POPULARITY_BUCKETS = {
    0: { count: 0, display: '5' },
    1: { count: 0, display: '10' },
    2: { count: 0, display: '15' },
    3: { count: 0, display: '20' },
    4: { count: 0, display: '25' },
    5: { count: 0, display: '30' },
    6: { count: 0, display: '35' },
    7: { count: 0, display: '40' },
    8: { count: 0, display: '45' },
    9: { count: 0, display: '50' },
    10: { count: 0, display: '55' },
    11: { count: 0, display: '60' },
    12: { count: 0, display: '65' },
    13: { count: 0, display: '70' },
    14: { count: 0, display: '75' },
    15: { count: 0, display: '80' },
    16: { count: 0, display: '85' },
    17: { count: 0, display: '90' },
    18: { count: 0, display: '95' },
    19: { count: 0, display: '100' }
};

const TEMPO_BUCKETS = {
    0: { count: 0, display: '0' },
    1: { count: 0, display: '10' },
    2: { count: 0, display: '20' },
    3: { count: 0, display: '30' },
    4: { count: 0, display: '40' },
    5: { count: 0, display: '50' },
    6: { count: 0, display: '60' },
    7: { count: 0, display: '70' },
    8: { count: 0, display: '80' },
    9: { count: 0, display: '90' },
    10: { count: 0, display: '100' },
    11: { count: 0, display: '110' },
    12: { count: 0, display: '120' },
    13: { count: 0, display: '130' },
    14: { count: 0, display: '140' },
    15: { count: 0, display: '150' },
    16: { count: 0, display: '160' },
    17: { count: 0, display: '170' },
    18: { count: 0, display: '180' },
    19: { count: 0, display: '190' },
    20: { count: 0, display: '200+'}
};

const KEY_BUCKETS = {
    0: { count: 0, display: 'C' },
    1: { count: 0, display: 'C#/Db' },
    2: { count: 0, display: 'D' },
    3: { count: 0, display: 'D#/Eb' },
    4: { count: 0, display: 'E' },
    5: { count: 0, display: 'F' },
    6: { count: 0, display: 'F#/Gb' },
    7: { count: 0, display: 'G' },
    8: { count: 0, display: 'G#/Ab' },
    9: { count: 0, display: 'A' },
    10: { count: 0, display: 'A#/Bb' },
    11: { count: 0, display: 'B' }
};

const TIME_BUCKETS = {
    1: { count: 0, display: '1' },
    2: { count: 0, display: '2' },
    3: { count: 0, display: '3' },
    4: { count: 0, display: '4' },
    5: { count: 0, display: '5' },
    6: { count: 0, display: '6' },
    7: { count: 0, display: '7' }
};

export const AUDIO_FEATURES = {
    loudness: {
        displayName: 'loudness',
        units: 'dB',
        mapFunction: loudnessMapFunction,
        reduceFunction: simpleReduceFunction,
        buckets: LOUDNESS_BUCKETS
    },
    energy: {
        displayName: 'energy',
        units: '',
        mapFunction: data => zeroOneMapFunction(data, 'energy'),
        reduceFunction: simpleReduceFunction,
        buckets: ZERO_ONE_BUCKETS
    },
    key: {
        displayName: 'key',
        units: '',
        mapFunction: data => simpleMapFunction(data, 'key'),
        reduceFunction: simpleReduceFunction,
        buckets: KEY_BUCKETS
    },
    mode: {
        displayName: 'mode',
        units: '',
        mapFunction: data => simpleMapFunction(data, 'mode'),
        reduceFunction: simpleReduceFunction,
        buckets: { 0: { count: 0, display: 'minor' }, 1: { count: 0, display: 'major'} }
    },
    acousticness: {
        displayName: 'acousticness',
        units: '',
        mapFunction: data => zeroOneMapFunction(data, 'acousticness'),
        reduceFunction: simpleReduceFunction,
        buckets: ZERO_ONE_BUCKETS
    },
    speechiness: {
        displayName: 'speechiness',
        units: '',
        mapFunction: data => zeroOneMapFunction(data, 'speechiness'),
        reduceFunction: simpleReduceFunction,
        buckets: ZERO_ONE_BUCKETS
    },
    instrumentalness: {
        displayName: 'instrumentalness',
        units: '',
        mapFunction: data => zeroOneMapFunction(data, 'instrumentalness'),
        reduceFunction: simpleReduceFunction,
        buckets: ZERO_ONE_BUCKETS
    },
    liveness: {
        displayName: 'liveness',
        units: '',
        mapFunction: data => zeroOneMapFunction(data, 'liveness'),
        reduceFunction: simpleReduceFunction,
        buckets: ZERO_ONE_BUCKETS
    },
    valence: {
        displayName: 'valence',
        units: '',
        mapFunction: data => zeroOneMapFunction(data, 'valence'),
        reduceFunction: simpleReduceFunction,
        buckets: ZERO_ONE_BUCKETS
    },
    tempo: {
        displayName: 'tempo',
        units: 'bpm',
        mapFunction: tempoMapFunction,
        reduceFunction: simpleReduceFunction,
        buckets: TEMPO_BUCKETS
    },
    danceability: {
        displayName: 'danceability',
        units: '',
        mapFunction: data => zeroOneMapFunction(data, 'danceability'),
        reduceFunction: simpleReduceFunction,
        buckets: ZERO_ONE_BUCKETS
    },
    trackNumber: {
        displayName: 'track number',
        units: '',
        mapFunction: data => simpleMapFunction(data, 'trackNumber'),
        reduceFunction: simpleReduceFunction,
        buckets: {}
    },
    durationMs: {
        displayName: 'duration (ms)',
        units: 'minutes',
        mapFunction: durationMapFunction,
        reduceFunction: simpleReduceFunction,
        buckets: DURATION_BUCKETS
    },
    timeSignature: {
        displayName: 'time signature',
        units: 'x/4',
        mapFunction: data => simpleMapFunction(data, 'timeSignature'),
        reduceFunction: simpleReduceFunction,
        buckets: TIME_BUCKETS
    },
    popularity: {
        displayName: 'popularity',
        units: '',
        mapFunction: data => zeroOneHundredMapFunction(data, 'popularity'),
        reduceFunction: simpleReduceFunction,
        buckets: POPULARITY_BUCKETS
    }
};

function simpleMapFunction(data, key) {
    return data[key];
}

// this function looks to map the space from 0 to 1 into 20 equally sized buckets
function zeroOneMapFunction(data, key) {
    return isNil(data[key]) ? NOT_AVAILABLE : Math.floor(data[key] * 20);
}

// this function looks to map the space from 0 to 100 into 20 equally sized buckets
function zeroOneHundredMapFunction(data, key) {
    return isNil(data[key]) ? NOT_AVAILABLE : Math.floor(data[key] / 5);
}

function loudnessMapFunction(data) {
    let loudness = data.loudness;
    if (loudness < -35) {
        return 0;
    }
    if (loudness < -20) {
        return 1;
    }
    if (loudness < -15) {
        return 2;
    }
    if (loudness < -12) {
        return 3;
    }
    if (loudness < -9) {
        return 4;
    }
    if (loudness < -6) {
        return 5;
    }
    if (loudness < -3) {
        return 6;
    }
    if (loudness < 0) {
        return 7;
    }
    if (loudness === 0) {
        return 8;
    }
    return NOT_AVAILABLE;
}

function tempoMapFunction(data) {
    if (isNil(data.tempo)) {
        return NOT_AVAILABLE;
    }
    if (data.tempo > 200) {
        return 20;
    }
    return Math.floor(data.tempo / 10);
}

// buckets for duration go in one minute intervals up to 6, everything 6 minutes+ is in the same bucket
function durationMapFunction(data) {
    if (isNil(data.durationMs)) {
        return NOT_AVAILABLE;
    }
    let rawDurationBucket = Math.floor(data.durationMs / 60000);
    if (rawDurationBucket >= 7) {
        return 7;
    }
    return rawDurationBucket;
}

function simpleReduceFunction(data, key) {
    let nonEmptyKey = isNil(key) ? NOT_AVAILABLE : key.toString();
    data[nonEmptyKey] = (data[nonEmptyKey] || { count: 0, display: nonEmptyKey });
    data[nonEmptyKey].count++;
    return data;
}