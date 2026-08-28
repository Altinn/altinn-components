import{a7 as t,c as o}from"./iframe-BKPYfBaP.js";import{S as s}from"./Handshake-pl4vEDX8.js";import{S as e}from"./Bell-BMZ0DcwT.js";import{S as n}from"./Hashtag-CngBOdDV.js";import{S as p}from"./Files-CQVBvSPq.js";import{A as l}from"./AccountListItem-gHpKgw3y.js";import{A as m}from"./AccountListItemDetails-CP1Useds.js";import{L as c}from"./List-BhWzbYIR.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-vuMFE_6d.js";import"./Input-CHWt3Nk0.js";import"./Avatar-CBzwnIR6.js";import"./AvatarGroup-C3fpFOg5.js";import"./Badge-MDs50kx6.js";import"./Tooltip-BCY8jcz2.js";import"./Heading-BlMy4Ad2.js";import"./useHighlightedText-BNKt0Eyh.js";import"./ChevronUp-B-ED2Onp.js";import"./ChevronDown-CR6j5uYN.js";import"./ChevronRight-CfHO682k.js";import"./HeartFill-ClW5moNW.js";import"./ContextMenu-kuBM2y8u.js";import"./useDropdownMenuController-BCeELClC.js";import"./Dropdown-BaK7GwBJ.js";import"./SearchField-BEBaG6GH.js";import"./MagnifyingGlass-BcIgrRKJ.js";import"./FieldBase-BZsWcTUs.js";import"./Typography-Cdqx97qL.js";import"./Field-DD7IzQnc.js";import"./Label-TLLhNVMu.js";import"./useMenu-BEKNpnot.js";import"./MenuListItem-Dox6r-gI.js";import"./MenuListDivider-Br9qCroM.js";import"./MenuListHeading-DETCOsyl.js";import"./MenuItem-Bx6H1W-Q.js";import"./ItemMedia-CfPfvhkB.js";import"./Checkmark-CamERl7S.js";import"./ItemLabel-CAfmR_Xk.js";import"./ItemControls-MYYKbbE3.js";import"./InformationSquare-BcX77Iuf.js";import"./MenuElipsisHorizontal-OrSE-G0S.js";import"./Section-DIn3fiOi.js";import"./Flex-Dg9OypdH.js";import"./ButtonGroup-CQeTBn3N.js";import"./Divider-BSqtpqqG.js";import"./SettingsItem-BlqBaERd.js";import"./SettingsItemBase-CDU1KS3L.js";import"./ItemBase-CdLQP71A.js";import"./ItemLink-BZrHh3il.js";import"./SettingsModal-B7N099VA.js";import"./ModalBody-qGK1jZij.js";import"./ButtonIcon-g3sANd5j.js";import"./ButtonLabel-CEapPxhA.js";import"./AccountOrganization-DcDMHXqe.js";import"./Byline-CWryxIQc.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ut=["Default","Expanded"];export{r as Default,i as Expanded,ut as __namedExportsOrder,dt as default};
