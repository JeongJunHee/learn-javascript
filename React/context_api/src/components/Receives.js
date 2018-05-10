import React from 'react';
import { useSample } from '../contexts/sample';
// import { SampleConsumer, useSample } from '../contexts/sample';

const Receives = ({ value }) => {
  return (
    // <SampleConsumer>
    //   {
    //     // Render Props 패턴
    //     // (sample) => (
    //     //   <div>
    //     //     현재 설정된 값 : { sample.state.value }
    //     //   </div>
    //     // )

    //     // 비구조화 할당
    //     ({ state }) => (
    //       <div>
    //         현재 설정된 값 : { state.value }
    //       </div>
    //     )
    //   }
    // </SampleConsumer>
    <div>
      현재 설정된 값 : { value }
    </div>
  );
};

// export default Receives;
export default useSample(Receives);