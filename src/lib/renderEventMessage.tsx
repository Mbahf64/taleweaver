import { Frame } from "@gptscript-ai/gptscript";

const renderEventMessage = (event: Frame) => {
  switch (event.type) {
    case "runStart":
      return <div>Run Started at {event.start}</div>;
    case "callStart":
      return (
        <div>
          <p>Tool Starting: {event.tool?.description}</p>
        </div>
      );
    case "callChat":
      return (
        <div>
          chat in progress with your input {">>"} {String(event.input)}
        </div>
      );
    case "callProgress":
      return null;
    case "callFinish":
      return (
        <div>
          call finished:{" "}
          {event.output?.map((output) => (
            <div key={output.content}>{output.content}</div>
          ))}
        </div>
      );

    case "runFinish":
      return <div>Run finished at {event.end}</div>;
    case "callSubCalls":
      return (
        <div>
          sub-calls in progress:
          {event.output?.map((output, index) => (
            <div key={index}>
              <div>{output.content}</div>
              {output.subCalls &&
                Object.keys(output.subCalls).map((subCallkey) => (
                  <div key={subCallkey}>
                    <strong>subcall {subCallkey}:</strong>
                    <div>Tool ID: {output.subCalls[subCallkey].toolID}</div>
                    <div>Input: {output.subCalls[subCallkey].input}</div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      );
      
      case "callContinue":
        return (
          <div>
            Call Continue:
            {event.output?.map((output, index) => (
              <div key={index}>
                <div>{output.content}</div>
                {output.subCalls &&
                  Object.keys(output.subCalls).map((subCallkey) => (
                    <div key={subCallkey}>
                      <strong>subcall {subCallkey}:</strong>
                      <div>Tool ID: {output.subCalls[subCallkey].toolID}</div>
                      <div>Input: {output.subCalls[subCallkey].input}</div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        );

      case "callConfirm":
        return (
          <div>
            Call confirm:
            {event.output?.map((output, index) => (
              <div key={index}>
                <div>{output.content}</div>
                {output.subCalls &&
                  Object.keys(output.subCalls).map((subCallkey) => (
                    <div key={subCallkey}>
                      <strong>subcall {subCallkey}:</strong>
                      <div>Tool ID: {output.subCalls[subCallkey].toolID}</div>
                      <div>Input: {output.subCalls[subCallkey].input}</div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        );
default:
  return <pre>{JSON.stringify(event, null, 2)}</pre>;

  }
};

export default renderEventMessage;
