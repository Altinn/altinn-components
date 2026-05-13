import{j as t}from"./iframe-CpLxKnDM.js";import{S as b}from"./ArrowRedo-DuiSzzLl.js";import{S as v}from"./EyeClosed-Dm0Xe8f_.js";import{S as I}from"./Archive-2zuUqDx-.js";import{S as k}from"./Trash-0aRAlmkw.js";import{S as w}from"./ClockDashed-CK_NRh5l.js";import{S as l}from"./TeddyBear--wEPU4hx.js";import{i as u}from"./inboxSearchResults-vruhtmY5.js";import{C as r}from"./ContextMenu-6xw2WymN.js";import{L as x}from"./List-Dsn4R6o0.js";import{L as d}from"./ListItem-S3K-THCc.js";import{D as g}from"./DialogListItem-D2cEaIKf.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dk2QO8VQ.js";import"./dialogs-BjN1oGOd.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-wRXoUINs.js";import"./AttachmentList-CBP_n_ki.js";import"./AttachmentLink-CLfncgO-.js";import"./Icon-xH6stteC.js";import"./index-BZrYlxzi.js";import"./Skeleton-B2kLb9z1.js";import"./Badge-BprayW1R.js";import"./Tooltip-BKj7GKZF.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-g_590vId.js";import"./lite-DaUVFjkg.js";import"./Section-cnHf2d7L.js";import"./Flex-DdRay9SF.js";import"./Heading-Dmt1Hp0l.js";import"./useHighlightedText-De1FlINf.js";import"./TransmissionList-BVeH_0Y6.js";import"./Transmission-vMskS8WP.js";import"./Typography-jv3_dxzw.js";import"./SeenByLog-DOAFueQB.js";import"./SeenByLogButton-C35dgGur.js";import"./Button-DKJNFoHr.js";import"./button-DZ9B7a50.js";import"./AvatarGroup-DwxSIihj.js";import"./Avatar-Bh6xe4Ys.js";import"./SeenByLogItem-DeIAiYiE.js";import"./Byline-BCLyuZP2.js";import"./Divider-C56YGqyl.js";import"./DialogActions-BacnnlQp.js";import"./ButtonGroupDivider-BLjzTaaF.js";import"./ChevronUp-CGssbGWN.js";import"./ChevronDown-_hDUIJMX.js";import"./DropdownBase-BsnatbCX.js";import"./useClickOutside-BqQYW2Ht.js";import"./ButtonGroup-MGSBAJb-.js";import"./SearchField-DF0MNejq.js";import"./MagnifyingGlass-DhzKRFoX.js";import"./XMark-BkFwP2BW.js";import"./FieldBase-zLQdXhmX.js";import"./Label-C0kuzyFW.js";import"./index-DjVenMls.js";import"./Input-Cnu7Dubv.js";import"./input-CwcuNrJh.js";import"./MenuListItem-D6BVyzxR.js";import"./MenuListHeading-CtFt3nNd.js";import"./MenuItem-Da2X9VsT.js";import"./ItemMedia-DT3PutY3.js";import"./Checkmark-DpqhZdZ_.js";import"./ItemControls-SBEzslTa.js";import"./ChevronRight-16z1B_cb.js";import"./useMenu-CCk7NyHy.js";import"./index-B76D54i4.js";import"./InformationSquare-xpUpd4lr.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-0qeRnWl5.js";import"./Dropdown-gyW_V0cZ.js";import"./MenuElipsisHorizontal-BwK0VJ96.js";import"./ItemLink-BTrHhqHl.js";import"./DialogByline-BaKpmhrE.js";import"./DialogMetadata-C--fSQi8.js";import"./DialogStatus-vvL7cvk0.js";import"./MetaItem-CeGcj9mx.js";import"./ProgressIcon-DuOI5N7n.js";import"./Paperclip-DO71C6ra.js";import"./Files-ByjI0wSd.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
