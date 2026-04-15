import{j as t}from"./iframe-BWWyepKi.js";import{S as b}from"./ArrowRedo-DTJQRJT_.js";import{S as v}from"./EyeClosed-BMTReKaW.js";import{S as I}from"./Archive-C0BkWIAH.js";import{S as k}from"./Trash-DMXRjDw8.js";import{S as w}from"./ClockDashed-C37jzxs0.js";import{S as l}from"./TeddyBear-DAUf9ypm.js";import{i as u}from"./inboxSearchResults-B_7yPEJ7.js";import{C as r}from"./ContextMenu-Bmz4Uucx.js";import{L as x}from"./List-QdfDgzch.js";import{L as d}from"./ListItem-EuoB6Qe0.js";import{D as g}from"./DialogListItem-C7HbA2Fo.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CMCVT55W.js";import"./dialogs-X5_yIz4K.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-d-EQh2wL.js";import"./AttachmentList-DqWTA4MQ.js";import"./AttachmentLink-BASr19Km.js";import"./Icon-w9oNx8pI.js";import"./index-fkRlyifr.js";import"./Skeleton-CYDyiFkf.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CbLzoZkL.js";import"./lite-DaUVFjkg.js";import"./Section-B8U8libR.js";import"./Flex-C8xEqik7.js";import"./Heading-DQYelGqr.js";import"./useHighlightedText-BYfI8EMJ.js";import"./TransmissionList-BhKb5JDT.js";import"./Transmission-DFz-lktg.js";import"./Typography-C9vgo_J4.js";import"./SeenByLog-DkP90t4N.js";import"./SeenByLogButton-Ch2lIvMY.js";import"./Button-DaLP9UzX.js";import"./button-dq33hCwG.js";import"./AvatarGroup-DPHuhQ41.js";import"./Avatar-CiKCHN1S.js";import"./SeenByLogItem-BhGGgAAO.js";import"./Byline-B2BqakG-.js";import"./Divider-BnKww764.js";import"./DialogActions-CqnsYVnJ.js";import"./ButtonGroupDivider-DK_N-BQv.js";import"./ChevronUp-BJ9TGsTi.js";import"./ChevronDown-DWRTbX5l.js";import"./DropdownBase-CDaTtZub.js";import"./useClickOutside-DqlHBtqe.js";import"./ButtonGroup-Bf6ZmgRN.js";import"./SearchField-BuZQEnM8.js";import"./MagnifyingGlass-B591vdqr.js";import"./XMark-DJOirLMA.js";import"./FieldBase-DnRTsvox.js";import"./Label-DYc4A36I.js";import"./index-2Prco8uk.js";import"./Input-BcqR7Mo_.js";import"./input-CuS4pR7j.js";import"./MenuListItem-uASMHa_1.js";import"./MenuListHeading-CgclVl9k.js";import"./MenuItem-Dk1uy6my.js";import"./ItemMedia-h4TQiEvV.js";import"./Checkmark-C84HjHaR.js";import"./ItemControls-jVI2cRmn.js";import"./ChevronRight-I2Pyvoyr.js";import"./useMenu-BnIxk9FT.js";import"./InformationSquare-WPPzSpdY.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-Dc9W55Rj.js";import"./Dropdown-BWKRG_29.js";import"./MenuElipsisHorizontal-xqi8fzGv.js";import"./ItemLink-BmfX1JZV.js";import"./DialogByline-MyxJnnhc.js";import"./DialogMetadata-pDpxUTz1.js";import"./DialogStatus-Dv-X3bnc.js";import"./MetaTimestamp-P25KxXla.js";import"./MetaItemLabel-UghwGY0q.js";import"./ProgressIcon-Bn-B1_bQ.js";import"./Paperclip-B931rBbb.js";import"./MetaItem-C5x0b_s5.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
