import{j as t}from"./iframe-DU0n7__8.js";import{S as b}from"./ArrowRedo-BCJe7Iwg.js";import{S as v}from"./EyeClosed-BteARArW.js";import{S as I}from"./Archive-BK5DGjhH.js";import{S as k}from"./Trash-MdbyzcW1.js";import{S as w}from"./ClockDashed-BJpd6pOc.js";import{S as l}from"./TeddyBear-B4MRBkUM.js";import{i as u}from"./inboxSearchResults-DO44yk-Z.js";import{C as r}from"./ContextMenu-ki5GIL8X.js";import{L as x}from"./List-D0aDTMjw.js";import{L as d}from"./ListItem-DQYNDMBV.js";import{D as g}from"./DialogListItem-C2tsIY5n.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DCXiBgwp.js";import"./dialogs-iN75p-Px.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-D3hIHMwS.js";import"./AttachmentList-DISvz8Fo.js";import"./AttachmentLink-De5Kqrqb.js";import"./Icon-Dg7nJLrw.js";import"./index-sAFX08uI.js";import"./Skeleton-etbnaSOo.js";import"./Badge-DWaei4kj.js";import"./Tooltip-DMnOwjPw.js";import"./tooltip-UENHGvJl.js";import"./Section-DwU7Gyqo.js";import"./Flex-C_O_eubX.js";import"./Heading-BrrIdLRc.js";import"./useHighlightedText-Wa_y882s.js";import"./TransmissionList-BN3iQEZn.js";import"./Transmission-W8KhNNr7.js";import"./Typography-DOUoXZCv.js";import"./SeenByLog-atPcjhVq.js";import"./SeenByLogButton-Bu2gyyFa.js";import"./Button-pXyw-iqn.js";import"./AvatarGroup-BpsuUsFp.js";import"./Avatar-Bsgd2iIp.js";import"./SeenByLogItem-B7yuq18s.js";import"./Byline-D-DCimye.js";import"./Divider-DCKDjoOC.js";import"./DialogActions-DSF9JGXR.js";import"./ButtonGroupDivider-B64rjX68.js";import"./ChevronUp-B4O89os7.js";import"./ChevronDown-Bfnu4XYc.js";import"./DropdownBase-Bmy80Om2.js";import"./useClickOutside-DUozwDri.js";import"./ButtonGroup-rBVDnBd_.js";import"./SearchField-B4KuSSyF.js";import"./MagnifyingGlass-COVfkIqf.js";import"./XMark-DGVnrVrT.js";import"./FieldBase-BIV16XC5.js";import"./Label-DSFEyVbW.js";import"./Input-Cjh3ClWU.js";import"./MenuListItem-C1_3DGyN.js";import"./MenuListHeading-iogtqFYg.js";import"./MenuItem--8QkhFJ4.js";import"./ItemMedia-yH6oBbwQ.js";import"./Checkmark-CCpN8hs9.js";import"./ItemControls-BwQhe1K-.js";import"./ChevronRight-B4fDZY6k.js";import"./useMenu-CrvHU43k.js";import"./index-Cyw62YTk.js";import"./InformationSquare-Bfq2NTGF.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-BCWUKN9Y.js";import"./Dropdown-Bvq9VpIR.js";import"./MenuElipsisHorizontal-BxaMmiED.js";import"./ItemLink-B8GeE3YY.js";import"./DialogByline-80EEgrde.js";import"./DialogMetadata-CnQATuMe.js";import"./DialogStatus-CzDa7XkY.js";import"./MetaItem-C2tQfHgl.js";import"./ProgressIcon-DAMx4WYn.js";import"./Paperclip-vQzd0cK8.js";import"./Files-DRXx6mX2.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Nt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Nt as __namedExportsOrder,Jt as default};
