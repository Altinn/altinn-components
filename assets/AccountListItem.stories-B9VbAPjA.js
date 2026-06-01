import{p as t}from"./iframe-HmDeAVAp.js";import{S as a}from"./Handshake-Blj7gP8L.js";import{S as e}from"./Bell-OUyuKCV8.js";import{S as s}from"./Hashtag-sbESJ2nh.js";import{S as n}from"./Files-FdN32_BN.js";import{A as p}from"./AccountListItem-Jh0SsdfW.js";import{A as m}from"./AccountListItemDetails-kcNBwKFI.js";import{B as l}from"./Button-SB9AH0kY.js";import{L as c}from"./List-CZwq9NP_.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BNhfXdUV.js";import"./ListItem-u6nNWWO6.js";import"./index-CDtevUxF.js";import"./Input-Dd7kdPyi.js";import"./tooltip-DaXe8rKK.js";import"./XMark-DFSmJjac.js";import"./Icon-DE5JaAj2.js";import"./Skeleton-C_Dxe6ID.js";import"./Avatar-CUX9SLHz.js";import"./AvatarGroup-CpvcYsvD.js";import"./Badge-DVsrmVw9.js";import"./Tooltip-DFVNjhLt.js";import"./Heading-CYuK0FXt.js";import"./useHighlightedText-CVbcsWEJ.js";import"./ChevronUp-DWlUIEYm.js";import"./ChevronDown-D8XmQ_JM.js";import"./ChevronRight-Cqfpq8PE.js";import"./HeartFill-F6kflSFE.js";import"./ContextMenu-oQVSL7Ks.js";import"./useDropdownMenuController-DyRpfBpv.js";import"./Dropdown-DitJK_eU.js";import"./SearchField-jJndU2uH.js";import"./MagnifyingGlass-BBPHMis4.js";import"./FieldBase-DgiW3HLY.js";import"./Typography-C3y2BBzr.js";import"./Field-D-jjHIb3.js";import"./Label-Bwfk_b4F.js";import"./useMenu-l9Wd3rxx.js";import"./MenuListItem-DjeDZ_MF.js";import"./MenuListHeading-Bby608mu.js";import"./MenuItem-C_rMT9NN.js";import"./ItemMedia-CLlob8fs.js";import"./Checkmark-_BupHaSE.js";import"./ItemLabel-DIku2iz8.js";import"./ItemControls-dRm3u7Mm.js";import"./index-4vigTm9p.js";import"./InformationSquare-C8JPrkni.js";import"./MenuElipsisHorizontal-BDeVXpR4.js";import"./Section-0rDkal-t.js";import"./Flex-CKAWkLAd.js";import"./ButtonGroup-IIZdVlDD.js";import"./Divider-BIbR-R0K.js";import"./SettingsItem-CWr_X-jX.js";import"./SettingsItemBase-xPZwhobn.js";import"./ItemBase-p8rf4Jdz.js";import"./ItemLink-DyGCCHkK.js";import"./SettingsModal-CygK-Zxf.js";import"./ModalBody-HgcUYgus.js";import"./ButtonIcon-CIUJ6U7l.js";import"./ButtonLabel-fQ3RMke8.js";import"./AccountOrganization-Dh-96H5R.js";import"./Byline-CbAX77ox.js";const It={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(c,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(l,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...i.parameters?.docs?.source}}};const Dt=["Default","Expanded"];export{r as Default,i as Expanded,Dt as __namedExportsOrder,It as default};
