import{p as t}from"./iframe-WHERbRNQ.js";import{S as b}from"./ArrowRedo-BuZD7guv.js";import{S as v}from"./EyeClosed-DxnwR4nn.js";import{S as I}from"./Archive-PwU0eenA.js";import{S as k}from"./Trash-C1kE2B-c.js";import{S as w}from"./ClockDashed-C-WhItbV.js";import{C as r}from"./ContextMenu-B3-GsygK.js";import{i as l}from"./inboxSearchResults-B1Z37TTI.js";import{S as u}from"./TeddyBear-qCMf9Eex.js";import{L as x}from"./List-D4V152hW.js";import{D as d}from"./DialogListItem-BkfqUNm9.js";import{L as g}from"./ListItem-DNg50TZS.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BfbJ7PbP.js";import"./useDropdownMenuController-BgP7AVfL.js";import"./Dropdown-BvAU1fs3.js";import"./index-CPQpJFkN.js";import"./Button-DkTjWAj1.js";import"./tooltip-C7TGaz5I.js";import"./XMark-5kXogJ_J.js";import"./SearchField-CjOGKjR9.js";import"./MagnifyingGlass-DkwRxD0r.js";import"./FieldBase-9wEEVFHi.js";import"./Typography-CVWBmure.js";import"./useHighlightedText-CCsQk8zm.js";import"./Skeleton-rNcUZaAx.js";import"./Label-DoBAei1C.js";import"./Input-D2AEap14.js";import"./useMenu-DdbFwnvU.js";import"./MenuListItem-Gq-dCZ2a.js";import"./MenuListHeading-B72ED6_O.js";import"./MenuItem-BN2QDxa4.js";import"./ItemMedia-CZ4j0uoG.js";import"./Avatar-BsRLrsxS.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Icon-jpLauUO9.js";import"./Checkmark-DwlfhjiK.js";import"./ItemLabel-CGpASln7.js";import"./Heading-POmwd9W2.js";import"./ItemControls-CXMEe70O.js";import"./Badge-DPxfDcUM.js";import"./Tooltip-C3iERcDF.js";import"./ChevronRight-HD9xUhWG.js";import"./index-Cy4S4a6-.js";import"./InformationSquare-DqU7vShm.js";import"./MenuElipsisHorizontal-B223Pxx-.js";import"./dialogs-Bk8EEJ5J.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BXfB3817.js";import"./AttachmentList-C7J7EWrP.js";import"./AttachmentLink-DUCgeyoR.js";import"./File-GnNKfjpt.js";import"./Section-D-Yeh31t.js";import"./Flex-DJNl6q2s.js";import"./TransmissionList-DwWMb1_D.js";import"./Transmission-BLmCyyi7.js";import"./SeenByLog-CAbfAiUW.js";import"./SeenByLogButton-Bpk1bogl.js";import"./SeenByLogItem-BRPFR2HG.js";import"./Byline-CDFoh2Gc.js";import"./Divider-BWARbb1_.js";import"./DialogActions-CLbzIPxA.js";import"./ButtonGroupDivider-B8E39iWl.js";import"./ChevronUp-BIOdACnc.js";import"./ChevronDown-DWIhSCAm.js";import"./DropdownBase-CexvDtcw.js";import"./useClickOutside-DUCwzLAC.js";import"./ButtonGroup-BZN8TM8O.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BC1KuoSI.js";import"./ItemLink-Bc2_vK4_.js";import"./DialogByline-CJ_g4DTa.js";import"./DialogMetadata-CxJpBtgH.js";import"./DialogStatus-qPOXW2HY.js";import"./MetaItem-mmPP9Nck.js";import"./ProgressIcon-Dsyr8RLI.js";import"./Paperclip-BEqO3Wfb.js";import"./Files-92COYykp.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const Wt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Wt as __namedExportsOrder,Vt as default};
