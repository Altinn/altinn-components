import{j as t}from"./iframe-C6Awlou2.js";import{S as b}from"./ArrowRedo-DKrhBbVI.js";import{S as v}from"./EyeClosed-BdzmkFik.js";import{S as I}from"./Archive-Cyt7GbXr.js";import{S as k}from"./Trash-Ccqpg617.js";import{S as w}from"./ClockDashed-BMcmzfJx.js";import{S as l}from"./TeddyBear-CbXexFuV.js";import{i as u}from"./inboxSearchResults-BYG4NVwR.js";import{C as r}from"./ContextMenu-Bd4hTYBx.js";import{L as x}from"./List-BRK8Eu__.js";import{L as d}from"./ListItem-B4a0Y9mW.js";import{D as g}from"./DialogListItem-SxowEyzk.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-InpKFtFj.js";import"./dialogs-BYrNtBUN.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C2Sll0YT.js";import"./AttachmentList-Kh1vuZcv.js";import"./AttachmentLink-BL10_H4P.js";import"./Icon-DNxmTYNY.js";import"./index-DlBZqmFk.js";import"./Skeleton-Dzw9idTE.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./tooltip-wBWP-9p3.js";import"./Section-Bo2XNiOH.js";import"./Flex-CdwLgxBs.js";import"./Heading-CwC0m1gc.js";import"./useHighlightedText-BOeqc4_T.js";import"./TransmissionList-7bKsyvGh.js";import"./Transmission-XpCFYnlR.js";import"./Typography-B5eitD86.js";import"./SeenByLog-B1Lee4DV.js";import"./SeenByLogButton-CVuDalN1.js";import"./Button-xDUaTd0f.js";import"./AvatarGroup-CCkWNWoM.js";import"./Avatar-CJAvXADO.js";import"./SeenByLogItem-B4YYN1TE.js";import"./Byline-BNoBNYMp.js";import"./Divider-Dv9ZwaQV.js";import"./DialogActions-tGQFoPON.js";import"./ButtonGroupDivider-o9_G-o4g.js";import"./ChevronUp-CFyLtqTc.js";import"./ChevronDown-BaaUSGet.js";import"./DropdownBase-BvG6xUDm.js";import"./useClickOutside-B3teLqpQ.js";import"./ButtonGroup-wXquxLDR.js";import"./SearchField-BUnYpq_7.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./XMark-BEbAfGHw.js";import"./FieldBase-D62sKxwt.js";import"./Label-C48-SpFn.js";import"./Input-DYyIZxUH.js";import"./MenuListItem-DEkjbPAb.js";import"./MenuListHeading-0XPhJCtv.js";import"./MenuItem-DvRDzq7X.js";import"./ItemMedia-C094egTG.js";import"./Checkmark-dLQcEakJ.js";import"./ItemControls-vVSkFb-5.js";import"./ChevronRight-BPFGJ1iV.js";import"./useMenu-CAczdzUV.js";import"./index-C-MjzqYY.js";import"./InformationSquare-DNjiq8ws.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-lE7_h4w8.js";import"./Dropdown-A06NMf9H.js";import"./MenuElipsisHorizontal-DVK_g9_l.js";import"./ItemLink-sxVrkQm-.js";import"./DialogByline-BFks9TDX.js";import"./DialogMetadata-xMqUDPFx.js";import"./DialogStatus-CY2DG47i.js";import"./MetaItem-DXdwoWxE.js";import"./ProgressIcon-AEKlg6y3.js";import"./Paperclip-2zzMkfO0.js";import"./Files-Hb-ADoK6.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
