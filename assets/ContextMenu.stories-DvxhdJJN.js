import{j as t}from"./iframe-D8UVhXtj.js";import{S as b}from"./ArrowRedo-FDDR50tt.js";import{S as v}from"./EyeClosed-BOGH6KDX.js";import{S as I}from"./Archive-yOskI6Ky.js";import{S as k}from"./Trash-CZH-fdX8.js";import{S as w}from"./ClockDashed-BaXKWOyL.js";import{S as l}from"./TeddyBear-DR4858uD.js";import{i as u}from"./inboxSearchResults-D_FJpSV8.js";import{C as r}from"./ContextMenu-_5Z_O_-3.js";import{L as x}from"./List-BMtt49y1.js";import{L as d}from"./ListItem-BMdkWFBB.js";import{D as g}from"./DialogListItem-R15ZeZHW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B_5z_sER.js";import"./dialogs-T0RGxkle.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C5O-2afI.js";import"./AttachmentList-DKNReJBg.js";import"./AttachmentLink-DwQqUI2Y.js";import"./Icon-DPTwfvyC.js";import"./index-DZ6CWLt4.js";import"./Skeleton-DuOqXwDT.js";import"./Badge-FbSzRhwU.js";import"./Section-CECOJo4z.js";import"./Flex-C6te8drU.js";import"./Heading-BAduz1Vr.js";import"./useHighlightedText-CniNcpSk.js";import"./TransmissionList-BRTMTbbF.js";import"./Transmission-_SYkCdXY.js";import"./Typography-n-xWt5s-.js";import"./SeenByLog-emqzOgE6.js";import"./SeenByLogButton-BapgtE9t.js";import"./Button-C1dDhU4f.js";import"./button-BAeX-ygn.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Avatar-DcRqiXhT.js";import"./SeenByLogItem-DjnWEiul.js";import"./Byline-BDjC19uQ.js";import"./Divider-CSLu3akR.js";import"./DialogActions-BEfKgRfQ.js";import"./ButtonGroupDivider-D-j9u71T.js";import"./ChevronUp-ceXuKviy.js";import"./ChevronDown-B-wfcPIe.js";import"./DropdownBase-CcHs2eZC.js";import"./useClickOutside-C7CiGEtT.js";import"./ButtonGroup-o1ngc8Xw.js";import"./SearchField-DrqRDMva.js";import"./MagnifyingGlass-Dwu8NLc_.js";import"./XMark-RzwOtF1Q.js";import"./FieldBase-DzrGcQVO.js";import"./Label-b2Pkfnmh.js";import"./index-B_UnVtHx.js";import"./Input-CeOaqFsx.js";import"./input-Dh6CJXOW.js";import"./MenuListItem-D2rOlDhJ.js";import"./MenuListHeading-BCjwSnwp.js";import"./MenuItem-D_QGB2bx.js";import"./ItemMedia-D1B_6Nv6.js";import"./Checkmark-DOivg6Pe.js";import"./ChevronRight-BBMrC_JJ.js";import"./useMenu-Bi-E8KDv.js";import"./InformationSquare-BUh6v1hF.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-DzAqcIMc.js";import"./Dropdown-DCJfu5rP.js";import"./Tooltip-Z_wNKmlw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-CLjONwTq.js";import"./DialogByline-CulGQcqs.js";import"./DialogMetadata-6FORkl22.js";import"./DialogStatus-D-KTWufH.js";import"./Hourglass-jyr1GynA.js";import"./MetaProgress-DIG3UXqu.js";import"./MetaItemLabel-BUVcQt4B.js";import"./ProgressIcon-BqcapCIt.js";import"./MetaItem-CUVQPDUJ.js";import"./MetaTimestamp-BXtatWst.js";import"./Paperclip-ctSduXzx.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  return <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
  const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
  return <List>
      <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
